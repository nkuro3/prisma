import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* 1 */
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io'
  //   }
  // });
  // console.log(user);

  /* 2 */
  const users = await prisma.user.findMany();
  console.log(users);

  /* 3 */
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Hello World',
  //           published: true
  //         },
  //         {
  //           title: 'My second post',
  //           content: 'This is still a draft'
  //         }
  //       ]
  //     }
  //   }
  // });
  // console.log(user);

  /* 4 */
  // const usersWithPosts = await prisma.user.findMany({
  //   include: {
  //     posts: true
  //   }
  // });
  // console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
