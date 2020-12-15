<template>
    <div class="question">
        <v-card>
            <v-card-text class="grey lighten-5">
                <p class="question-title">{{question.title}}</p>
                <p class="question-main" v-html="question.content"></p>
                <v-divider></v-divider>
                <div class="question-list">
                    <div v-for="(item, index) in lists" :key="index">
                        <sub-question :item="item" :index="index+1" :isChecked="isChecked"></sub-question>
                    </div>
                </div>
            </v-card-text>
        </v-card>
        <div class="check-btn">
            <v-btn class="mt-2 blue lighten-1 white--text" @click="check()">
                Check
            </v-btn>
        </div>
    </div>
</template>

<script>
import SubQuestion from "./SubQuestion";
export default {
    name: "Question",
    components: {SubQuestion},
    data() {
        return {
            question: [],
            lists: [],
            isChecked: false
        }
    },
    methods: {
        getQuestion() {
            axios.get('api/question/' + this.$route.params.id)
                .then(response => {
                    this.question = response.data;
                    this.lists = JSON.parse(response.data.list_questions);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        check() {
            this.isChecked = true;
        }
    },
    created() {
        this.getQuestion();
    }
}
</script>

<style scoped>
.question-title {
    font-weight: bold;
}
.question-main {
    font-weight: bold;
}
</style>
