# Use OpenJDK 17 runtime image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy built jar file to the image
COPY build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
