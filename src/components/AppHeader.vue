<script lang="ts" setup>

</script>
<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <RouterLink to="/" aria-label="Home" class="btn btn-ghost text-xl anton-sc-regular ">
                ANVILATION
            </RouterLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <a href="https://www.linkedin.com/in/mbarben/" aria-label="Linkedin" target="blank">
                        <v-icon name="bi-linkedin" scale="1.5" />
                    </a>
                </li>
                <li>
                    <a href="https://anvilation.github.io/" aria-label="GitHub" target="blank">
                        <v-icon name="bi-github" scale="1.5" />
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@mbarben/" aria-label="Medium" target="blank">
                        <v-icon name="fa-medium-m" scale="1.5" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/anvil8tor/" aria-label="Instagram" target="blank">
                        <v-icon name="bi-instagram" scale="1.5" />
                    </a>
                </li>
                <li><a href="https://bsky.app/profile/whiteanvil.bsky.social" aria-label="BlueSky" target="blank">
                        <svg fill="none" viewBox="0 0 64 57" width="28" style="width: 28px; height: 24.9375px;">
                            <path fill="#FFF"
                                d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z">
                            </path>
                        </svg></a>
                </li>
            </ul>
        </div>
    </div>

</template>