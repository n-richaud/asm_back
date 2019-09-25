<template>
    <div>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <router-link
                    class="navbar-brand"
                    to="/home"
            >
                <b-navbar-item href="#">
                    Accueil
                </b-navbar-item>
            </router-link>

            <b-navbar-item href="#">
                Mes dossiers de compétences
            </b-navbar-item>
            <b-navbar-dropdown label="Admin">
                <router-link
                        class="navbar-brand"
                        :to="{name: 'adminUser'}"
                >
                <b-navbar-item >
                    gerer les users
                </b-navbar-item>
                </router-link>
                <b-navbar-item href="#">
                    gérer les dossiers de compétences
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>


    </b-navbar>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App",
        created() {
            let redirect = 'connect/google';

            if (!this.$store.getters["security/isAuthenticated"]) {
                this.$store.dispatch("security/login");
                if (!this.$store.getters["security/hasError"]) {
                    if (typeof redirect !== "undefined") {
                        this.$router.push({path: redirect});
                    } else {
                        this.$router.push({path: "/home"});
                    }
                }
            }
        }

    };
</script>