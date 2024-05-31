import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const requestData = await request.json();
  const { email, fullname } = requestData;

  try {
    const transporter = nodemailer.createTransport({
      //   service: "ornorit.com.ng:2096",
      host: "mail.ornorit.com.ng",
      port: 465,
      secure: true,
      auth: {
        user: "info@ornorit.com.ng",
        pass: process.env.PASSWORD,
      },
    });

    // const newInvite = await prisma.invite.create({
    //   data: {
    //     name,
    //     email,
    //     // password: hashedPassword,
    //   },
    // });

    const mailOption = {
      from: "info@ornorit.com.ng",
      to: `${email}`,
      subject: "Welcome Email form IGTA",
      html: `
        <h3>Hello ${fullname}</h3>
        <p> You account has been created succesfully.</p> 
        <p> The whole team  of IGTA is using this opportunity to welcome you to our platform.</p> 
        <p> Our goal is to provide a platform for skill and human development for personal and organization growth and progress </p> 

        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
