<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6 sm3>
                <v-card elevation="5">
                    <v-toolbar dark>
                        <v-toolbar-title>{{title}}</v-toolbar-title>
                        <slot name="action" />
                    </v-toolbar>
                    <div class="pl-5 pr-5 pt-1 pb-1">
                        <slot>
                        </slot>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
