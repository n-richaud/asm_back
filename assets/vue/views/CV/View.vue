<template>
    <div class="resume">
        <div class="banner">
            <div class="banner__fullname">{{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}</div>
            <div class="banner__position">{{ person.position }}</div>
            <!-- <div v-if="person.experience_year" class="banner__experience">{{person.experience_year}} ans d'experience</div> -->
        </div>
        <div class="content">
            <div class="content__left">

            </div>

            <div class="content__right">
                <div
                        v-if="person.skills"
                        class="section">
                    <div class="section-headline">
                        <i class="section-headline__icon material-icons">done_all</i> {{ lang.skills }}
                    </div>

                    <div class="section-content">


              <span v-for="(skill, index) in person.skills"
                    class="section-content__skills"
                    :key="index" >
                <span class="section-content__skills__type">{{ skill.name }}</span>
                <span class="section-content__skills__list"> {{skill.list.join(', ')}}</span>
              </span>

                    </div>
                </div>
                <div class="section">
                    <div class="section-headline">
                        <!-- <i class="section-headline__icon material-icons">school</i> -->
                        {{ lang.education }}
                    </div>

                    <div class="section-content">
                        <a
                                v-for="(education, index) in person.education"
                                class="section-content__item"
                                :key="index"
                                :href="education.website">

                            <span class="section-content__header"> {{ education.school }} </span>
                            <span class="section-content__subheader">{{ education.degree }}</span>
                            <span class="section-content__text--light"> {{ education.description }} </span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer">
            <span>logo</span>
            <span class="footer__pagenumber">1/3</span>
            <span class="footer__fullname">{{ person.name.first }} </span>


        </div>

        <!-- <img class="picture"/> -->
    </div>
</template>

<script>

    import Vue from 'vue';
    import { getVueOptions } from './options';

    const name = 'view';

    export default Vue.component(name, getVueOptions(name));
</script>
<style lang="less" scoped>
    @accent-color: #144f4f;
    @banner-color: #80e8ba;
    @banner-height: 120px;
    @picture-size: 120px;
    @picture-offset: 35px;
    @base-padding: 30px;
    @left-column-width: 90px;


    .resume {
        position: relative;
        font-family:'Roboto' !important;
        font-size: 0.9em;
    }

    .picture {
        position: absolute;
        top: @banner-height - @picture-offset;
        left: @left-column-width + @base-padding * 2 - @picture-size / 2;
        height: @picture-size;
        width: @picture-size;
        border-radius: 50%;
        //   border: 5px solid @accent-color;
        content: url('../../resume/id.jpg');
        z-index: 2;
    }
    .banner {
        width: calc(100% - @base-padding * 2);
        height: @banner-height;
        padding: @base-padding;
        background-color: @banner-color;
        /*
          background-image: url('../../resume/banner.png');
          background-repeat: no-repeat;
          background-size: cover;
        */
        color: white;

        &__fullname {
            font-size: 32px;
        }

        &__position {
            font-size: 16px;
        }

        &__experience {
            font-size: 12px;
        }
    }
    .footer{
        width: calc(100% - @base-padding * 2);
        height: @banner-height;
        padding: @base-padding;
        background-color: @banner-color;
        display: grid;
        grid-template-columns: 45% auto 10%
    }

    .content {
        display: flex;
        width: 100%;
        height: 75%;

        &__left,
        &__right {
            height: 100%;
            padding: @base-padding;
        }

        &__left {
            width: @left-column-width;
            color: rgba(255, 255, 255, 0.59);
            // background-color: @accent-color;

            .section-headline {
                color: white;
            }
        }

        &__right {
            flex: 1;
        }
    }

    .section {
        margin: 20px 0;
    }

    .section-link,
    .section-headline {
        display: flex !important;
        align-items: center;
        color: @accent-color;
        display: inline-block;
        font-size: 1.8em;
        margin: 8px 0;

        &__icon {
            margin-right: 8px;
            font-size: 1.4em;
        }
    }

    .section-link {
        font-size: 1.1em;
        color: rgba(255, 255, 255, 0.59) !important;

        &__icon {
            color: white;
        }
    }

    .section-content {
        margin-top: 5px;
        padding-left: 52px;
        font-size: 14px;

        &__item {
            display: block;
            margin-bottom: 5px;
        }

        &__header {
            display: block;
            font-size: 1.1em;
            font-weight: 500;
        }

        &__skills {
            margin-top: 20px;
            display: block;
            font-size: 1.1em;
            display: flex;
            justify-content: space-between;
            text-transform: capitalize;


            &__type{
                font-weight: 500;
                width: 70%;
            }

            &__list{
                width: 30%;
            }
        }

        &__subheader {
            display: block;
            font-weight: 400;
        }

        &__plain,
        &__text {
            display: block;
            font-size: 12px;

            &--light {
                font-size: 12px;
            }
        }

        &__plain {
            display: inline;
            font-weight: 300;
        }

        &__item-grid {
            flex: 1 1 0;
            margin-bottom: 5px;
            padding-right: 5px;
        }

        &--plain {
            padding: 0;
        }
    }

    .section-content-grid {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .grid-item {
        padding-right: 5px;
    }

    .squarred-grid-item {
        display: block;
        border: 1px solid white;
        color: white;
        margin-top: 5px;
        padding: 5px;
    }
</style>
