<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-3-mobile has-text-centered">
                        Rechercher un dossier
                    </h1>
                    <div class="columns">
                        <div class="column is-half is-offset-one-quarter">
                            <input class="input" type="text" placeholder="Nom, Compétences ....">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <nav class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <p class="subtitle is-5">
                                <strong>4</strong> résultats
                            </p>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item"><strong>All</strong></p>
                        <p class="level-item"><a>Lyon</a></p>
                        <p class="level-item"><a>Paris</a></p>
                        <p class="level-item"><a>Bordeaux</a></p>
                        <p class="level-item"><a>Lille</a></p>
                    </div>
                </nav>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <router-link
                                class="navbar-brand"
                                to="/cv"
                        >

                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4">Nicolas Richaud</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            <b-taglist>
                                                <b-tag type="is-info">microservice</b-tag>
                                                <b-tag type="is-info">PHP</b-tag>
                                                <b-tag type="is-info">symfony</b-tag>
                                                <b-tag type="is-info">Docker</b-tag>
                                                <b-tag type="is-info">API</b-tag>
                                            </b-taglist>
                                            <br>
                                            <a class="button">custom PDF</a>
                                            <a class="button">PDF</a>
                                        </div>
                                    </div>
                                </div>
                        </router-link>

                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    <b-taglist>
                                        <b-tag type="is-info">First</b-tag>
                                        <b-tag type="is-info">Second</b-tag>
                                        <b-tag type="is-info">Third</b-tag>
                                        <b-tag type="is-info">Fourth</b-tag>
                                        <b-tag type="is-info">Fifth</b-tag>
                                    </b-taglist>
                                    <br>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    <b-taglist>
                                        <b-tag type="is-info">First</b-tag>
                                        <b-tag type="is-info">Second</b-tag>
                                        <b-tag type="is-info">Third</b-tag>
                                        <b-tag type="is-info">Fourth</b-tag>
                                        <b-tag type="is-info">Fifth</b-tag>
                                    </b-taglist>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                    </div>
                                </div>

                                <div class="content">
                                    <b-taglist>
                                        <b-tag type="is-info">First</b-tag>
                                        <b-tag type="is-info">Second</b-tag>
                                        <b-tag type="is-info">Third</b-tag>
                                        <b-tag type="is-info">Fourth</b-tag>
                                        <b-tag type="is-info">Fifth</b-tag>
                                    </b-taglist>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Home"
    };
</script>