#
# Build stage
#
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /backend
COPY . .
RUN mvn clean install -DskipTests

#
# Package stage
#
FROM eclipse-temurin:17-jdk
WORKDIR /backend
COPY --from=build /backend/target/*.jar backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend.jar"]
