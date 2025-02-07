import { exec } from "child_process";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { error: "Java code is required" },
        { status: 400 }
      );
    }

    // Create a temporary directory to store the code
    const tempDir = path.resolve("./temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const filePath = path.join(tempDir, "Main.java");

    // Write the received code to Main.java
    fs.writeFileSync(filePath, code);

    // Docker command to compile and execute the Java code
    const dockerCommand = `
      docker build -t code-executor-java -f docker/java/Dockerfile . &&
      docker run --rm -v ${tempDir}:/usr/src/app code-executor-java
    `;

    return new Promise((resolve) => {
      exec(dockerCommand, (error, stdout, stderr) => {
        if (error) {
          console.error("Execution Error:", error.message);
          resolve(
            NextResponse.json(
              { error: "Execution failed", details: stderr || error.message },
              { status: 500 }
            )
          );
        } else if (stderr) {
          resolve(
            NextResponse.json(
              {
                output: stderr,
              },
              { status: 200 }
            )
          );
        } else {
          resolve(
            NextResponse.json(
              {
                output: stdout || "No Output",
              },
              { status: 200 }
            )
          );
        }
      });
    });
  } catch (err) {
    console.error("Request Processing Error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
