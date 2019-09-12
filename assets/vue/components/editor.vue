<template>
    <div class="container ">
        <div class="notification">
            <div>
                <h2 class="title is-2"> édition du dossier de </h2>
                <section>

                    <b-collapse class="card" aria-id="contentIdForA11y3">
                        <div
                                open="false"
                                slot="trigger"
                                slot-scope="props"
                                class="card-header"
                                role="button"
                                aria-controls="contentIdForA11y3">
                            <p class="card-header-title">
                                Infos générales
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div class="field">
                                    <label class="label">Position</label>
                                    <div class="control">
                                        <input class="input" type="text"  v-model="person.position">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Résumé</label>
                                    <div class="control">
                                        <textarea class="textarea" type="text" v-model="person.resume"></textarea>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Domaines</label>
                                    <div class="control">
                                        <multiselect v-model="person.domain" :options="options" :multiple="true" :taggable="true"
                                                     @tag="addTag"></multiselect>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </b-collapse>

                </section>
                <section>

                    <b-collapse class="card" aria-id="contentIdForA11y3">
                        <div
                                open="false"
                                slot="trigger"
                                slot-scope="props"
                                class="card-header"
                                role="button"
                                aria-controls="contentIdForA11y3">
                            <p class="card-header-title">
                                Compétences
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div v-for="(skill, index) in person.skills" :key="`resumeSkill-${index}`" class="field">
                                    <label class="label">{{skill.name}}</label>
                                    <div
                                            class="control">
                                        <multiselect v-model="person.skills[index].list" :options="options" :multiple="true" :taggable="true"
                                                     @tag="addTag"></multiselect>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </b-collapse>

                </section>
                <section>

                    <b-collapse class="card" aria-id="contentIdForA11y3">
                        <div
                                open="false"
                                slot="trigger"
                                slot-scope="props"
                                class="card-header"
                                role="button"
                                aria-controls="contentIdForA11y3">
                            <p class="card-header-title">
                                Veille et projets personnels
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div v-for="(project, index) in person.projects" :key="`B-${index}`" class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">projet </label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control is-expanded ">
                                                <input class="input" v-model="person.projects[index].label" placeholder="label" type="text">

                                            </p>
                                        </div>
                                        <div class="field">
                                            <p class="control is-expanded t">
                                                <input class="input" v-model="person.projects[index].link" placeholder="lien" type="texte">

                                            </p>
                                        </div>
                                        <div class="field">
                                            <p class="control is-expanded t">
                                                <a class="button" on-click="">
                                                    ajouter
                                                </a>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </b-collapse>

                </section>

                <section>

                    <b-collapse class="card" aria-id="contentIdForA11y3">
                        <div
                                open="false"
                                slot="trigger"
                                slot-scope="props"
                                class="card-header"
                                role="button"
                                aria-controls="contentIdForA11y3">
                            <p class="card-header-title">
                                Formation
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <div class="field">
                                    <label class="label">Formation</label>
                                    <div class="control">
                                        <textarea class="textarea" type="text" v-model="person.education"></textarea>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Langues</label>
                                    <div class="control">
                                        <multiselect v-model="person.lang_talk" :options="options" :multiple="true" :taggable="true"
                                                     @tag="addTag"></multiselect>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </b-collapse>

                </section>
                <section>

                    <b-collapse class="card" aria-id="contentIdForA11y3">
                        <div
                                open="false"
                                slot="trigger"
                                slot-scope="props"
                                class="card-header"
                                role="button"
                                aria-controls="contentIdForA11y3">
                            <p class="card-header-title">
                                Experiences
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                        :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <b-tabs v-model="activeTab">


                                    <b-tab-item :label="`${experience.company}`" v-for="(experience, xpIndex) in person.experience"
                                                :key="`experience-${xpIndex}`">
                                        <h4 class="title is-4">Experience {{xpIndex+1}} - {{ experience.company }} - {{ experience.timeperiod.begin }}</h4>
                                        <div class="field">
                                            <label class="label">Date de début</label>
                                            <div class="control">
                                                <vue-monthly-picker
                                                        v-model="experience.timeperiod.begin" dateFormat="MM/YYYY" @selected="setDate($event,'begin-date')">
                                                </vue-monthly-picker>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Date de fin</label>
                                            <div class="control">
                                                <vue-monthly-picker
                                                        v-model="experience.timeperiod.end" dateFormat="MM/YYYY" @selected="setDate($event,'begin-date')">
                                                </vue-monthly-picker>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <label class="label">Sujet du projet</label>
                                            <div class="control">
                                                <textarea class="textarea" v-model="experience.project_subject"> </textarea>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Responsabilité occupés</label>
                                            <div class="control">
                                                <textarea class="textarea" v-model="experience.project_subject"> </textarea>
                                            </div>
                                        </div>


                                        <h4 class="title is-4"> Travail realisé</h4>
                                        <div v-for="(work, workIndex) in experience.work_done"
                                             :key="`experience-${xpIndex}-work-${workIndex}`" class="field">
                                            <div class="control">
                                                <input class="input" v-model="person.experience[xpIndex].work_done[workIndex]">
                                            </div>
                                        </div>
                                        <div v-for="(skill, skillIndex) in experience.skills"
                                             :key="`C-${skillIndex}`" class="field">
                                            <label class="label">{{skill.name}}</label>
                                            <div
                                                    class="control">
                                                <multiselect v-model="person.skills[skillIndex].list" :options="options" :multiple="true" :taggable="true"
                                                             @tag="addTag"></multiselect>
                                            </div>
                                        </div>
                                    </b-tab-item>


                                </b-tabs>
                            </div>
                        </div>

                    </b-collapse>

                </section>





            </div>
        </div>
    </div>


</template>

<script>
    import Vue from 'vue';
    import yaml from 'js-yaml';
    // import '../resumes/resumes';
    import Multiselect from 'vue-multiselect';
    import {
        PERSON
    } from './data.yml';
    import VueMonthlyPicker from 'vue-monthly-picker';
    import moment from 'moment';


    export default Vue.component('edit', {
            name: 'app',
            components: {
                Multiselect,
                VueMonthlyPicker,
            },
            data() {
                return {
                    person: yaml.load(PERSON),
                    position: null,
                    resume: null,
                    activeTab: 0,
                    date: moment(),
                    value: 'Vues.js',
                    options: [
                        'Vue.js',
                        'Javascript',
                        'Open Source',
                    ]
                };
            },
            methods: {
                addTag(newTag) {
                    //const tag = {
                    //    name: newTag,
                    //    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                    //};
                    this.options.push(newTag);
                    this.value.push(newTag);
                },
                setDate(event) {

                    console.log(event.format('YYYY-MM-DD'));
                }

            }
        }
    );
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
