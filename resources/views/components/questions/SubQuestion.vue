<template>
    <div class="sub-question mt-2">
        <h3 v-html="index + '. ' + item.question"><strong></strong></h3>
        <v-radio-group v-model="picked">
            <v-radio :label="item.option1" value="1" :class="[highlight(item.answer, 1, isChecked)]"></v-radio>
            <v-radio :label="item.option2" value="2" :class="[highlight(item.answer, 2, isChecked)]"></v-radio>
            <v-radio :label="item.option3" value="3" :class="[highlight(item.answer, 3, isChecked)]"></v-radio>
            <v-radio v-if="item.option4" :label="item.option4" value="4" :class="[highlight(item.answer, 4, isChecked)]"></v-radio>
        </v-radio-group>
        <div v-show="isChecked"><strong>Đáp án: {{item.answer}}</strong></div>
    </div>
</template>

<script>
export default {
    name: "SubQuestion",
    props: ['item', 'index', 'isChecked'],
    data() {
        return {
            picked: null,
            checked: false
        }
    },
    methods: {
        show() {
            this.checked = true;
        },
        highlight(answer, index, isChecked) {
            if (isChecked){
                if (answer == index && this.picked == index) {
                    return 'green--text';
                }

                if (answer == index) {
                    return 'green--text';
                }

                if (answer != index && this.picked == index) {
                    return 'red--text';
                }

                return '';
            }

            return '';
        }
    }
}
</script>

<style scoped>
.red--text /deep/ label {
    color: red;
}

.green--text /deep/ label {
    color: #4fae02;
}
</style>
