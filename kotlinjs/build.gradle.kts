plugins {
    kotlin("js") version "1.5.10"
    id("com.github.turansky.kfc.latest-webpack") version "4.88.0"
}

group = "me.elianiva"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js(LEGACY) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}
