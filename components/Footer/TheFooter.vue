<template>
    <div>
        <TheNewsletter />

        <div class="footer-container bg-contrast-secondary">
            <div class="row mx-auto w-75">
                <div class="col-4 mr-3">
                    <TheLogo class="mb-4" />

                    <p class="text-tertiary">
                        Follow Me
                    </p>

                    <div class="row mx-0 text-white justify-content-between icons-social-media">
                        <div>
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </div>

                        <div>
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </div>

                        <div>
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </div>

                        <div>
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </div>
                        
                        <div>
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                        </div>
                    </div>
                </div>

                <div class="col-2 h7 d-flex flex-column">
                    <p class="font-weight-semibold h6 text-white mb-4">
                        Quick Links
                    </p>

                    <NuxtLink 
                        class="mb-2"
                        to="/"
                    >
                        About us
                    </NuxtLink>

                    <NuxtLink 
                        class="mb-2"
                        to="/"
                    >
                        Contact us
                    </NuxtLink>

                    <NuxtLink 
                        class="mb-2"
                        to="/"
                    >
                        Products
                    </NuxtLink>

                    <NuxtLink 
                        class="mb-2"
                        to="/"
                    >
                        Login
                    </NuxtLink>

                    <NuxtLink to="/">
                        Sign Up
                    </NuxtLink>
                </div>

                <div class="col-2 mr-5 h7 d-flex flex-column">
                    <p class="font-weight-semibold h6 text-white mb-4">
                        Movie Categories
                    </p>

                    <div class="d-flex flex-row">
                        <div class="d-flex flex-column mr-4">
                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Action
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Adventure
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Comedy
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Crime
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Drama
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Fantasy
                            </NuxtLink>
                        </div>

                        <div class="d-flex flex-column">
                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Horror
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Mistery
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                Romance
                            </NuxtLink>

                            <NuxtLink 
                                class="mb-2"
                                to="/"
                            >
                                TV Series
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-3 h7 p-3 message-footer rounded-3xl align-self-center">
                    <p class="h6 font-weight-bold text-white">
                        Watch movie everywhere & anytime now
                    </p>

                    <p class="text-tertiary mb-4">
                       Try our premium subscription and experience all the benefits of using the service
                    </p>

                    <BaseButton variant="tertiary">
                        Get Unlimited Access
                    </BaseButton>
                </div>
            </div>
        </div>

        <div class="inner-footer py-3 text-tertiary">
            <div class="w-75 mx-auto d-flex justify-content-between">
                <span class="h7">
                    Movie One - © 2022 All rights reserved
                </span>

                <span class="h7">
                    Made with ❤️ by Guido
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import TheNewsletter from './TheNewsletter';
import TheLogo from '~/components/TheLogo';

export default {
    name: 'TheFooter',

    components: {
        TheNewsletter,
        TheLogo,
    }
}
</script>

<style lang="scss" scoped>
.footer-container {
    padding: 7rem 0;
}

.icons-social-media {
    div {
        padding: .5rem 1rem;
        cursor: pointer;
        border-radius: .75rem;
        transition: all .3s ease;

        &:hover {
            background-color: #FD7014;
        }
    }
}

.message-footer {
    background: rgb(107,1,133);
    background: linear-gradient(229deg, rgba(107,1,133,1) 0%, rgba(100,10,36,1) 79%);
}

.inner-footer {
    background-color: #00031d;
}
</style>