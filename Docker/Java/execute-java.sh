#!/bin/bash
echo "Starting Java Execution..."  # Debugging line
cat > Main.java
echo "Java code received:"
cat Main.java  # Display the Java code being passed
javac Main.java

if [ $? -eq 0 ]; then
  echo "Compilation Successful, Running Program:"
  java Main
else
  echo "Compilation Failed."
fi
