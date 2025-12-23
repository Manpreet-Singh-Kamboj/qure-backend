import { prisma } from "../../prisma/client";
import bcrypt from "bcryptjs";

export class AuthService {
  static register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
  };
}
