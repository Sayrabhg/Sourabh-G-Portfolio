# Stage 1: Build the application with Maven
FROM maven:3.9-openjdk-17 AS build
WORKDIR /BackEnd
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jre-slim
WORKDIR /BackEnd
# Copy the JAR file from the 'build' stage to the 'run' stage
COPY --from=build /BackEnd/target/*.jar BackEnd.jar
EXPOSE 1212
ENTRYPOINT ["java", "-jar", "BackEnd.jar"]
