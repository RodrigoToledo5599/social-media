import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const users = [
        {
            "email": "rodrigotmt89@gmail.com",
            "name": "Rodrigo Toledo",
            "password": "123"
        },
        {
            "email": "carolinatmt89@gmail.com",
            "name": "Carolina Toledo",
            "password": "123"
        },
        {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            password: 'password123'
        },
        {
            name: 'Bob Smith',
            email: 'bob@example.com',
            password: 'securepass456'
        },
        {
            name: 'Charlie Brown',
            email: 'charlie@example.com',
            password: 'charlie789'
        }
    ];

    for (const user of users) {
        const hashedPassword = await hash(user.password, 10);

        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
                name: user.name,
                email: user.email,
                password: hashedPassword
            }
        });
    }

    console.log('✅ Seeded users!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
