<template>
    <v-simple-table fixed-header>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Link</th>
                    <th class="text-left">Level</th>
                    <th class="text-left">Skill</th>
                    <th class="text-left">Type</th>
                    <th class="text-left">Title</th>
<!--                    <th class="text-left">Content</th>-->
<!--                    <th class="text-left">List questions</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="question in questions" :key="questions.id">
                    <td><router-link :to="{ name: 'question', params: { id: question.id }}">About</router-link></td>
                    <td>{{parseLevel(question.level)}}</td>
                    <td>{{parseSkill(question.skill)}}</td>
                    <td>{{ question.type }}</td>
                    <td>{{ question.title }}</td>
<!--                    <td>{{ question.content }}</td>-->
<!--                    <td>{{ question.list_questions }}</td>-->
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import {parseSkill} from "../../js/helper";
import {parseLevel} from "../../js/helper";

export default {
    name: "Home",
    data () {
        return {
            questions: []
        }
    },
    methods: {
        parseSkill, parseLevel,
        getList() {
            axios.get('api/questions')
                .then(response => {
                    this.questions = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>

</style>
