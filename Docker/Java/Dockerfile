# Use OpenJDK as the base image
FROM openjdk:11

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy the Java execution script
COPY execute-java.sh .

# Ensure the script is executable
RUN chmod +x execute-java.sh

# Default to running the Java execution script
ENTRYPOINT ["./execute-java.sh"]
