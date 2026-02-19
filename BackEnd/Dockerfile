#
# -------- Build stage --------
#
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /BackEnd

# Copy pom first for dependency caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests


#
# -------- Runtime stage --------
#
FROM eclipse-temurin:17-jre
WORKDIR /BackEnd

# Copy only the built jar
COPY --from=build /BackEnd/target/ContactForms-0.0.1-SNAPSHOT.jar BackEnd.jar

EXPOSE 1212
ENTRYPOINT ["java", "-jar", "BackEnd.jar"]
