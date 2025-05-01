import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: "Michelle",
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//createMany
//findUnique
//findFirst
//findMany

// distinct
// orderBy
// skip

// where: {
//   NOT: { email: {startsWith: "sally"}},
// }
