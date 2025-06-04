# Stage 1: Build Spring Boot app using Gradle
FROM gradle:8.3.0-jdk17 AS build

# Switch to root so Gradle can write
USER root

WORKDIR /home/gradle/project

# Copy build files
COPY demo/build.gradle demo/settings.gradle ./
COPY demo/src ./src

# Build the application
RUN gradle build --no-daemon

# Stage 2: Run the app with OpenJDK
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /home/gradle/project/build/libs/*.jar app.jar

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
