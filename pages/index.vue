<template>
    <div>
        <div>{{user.name}}: {{user.age}}</div>
        <button @click="incrementAge">Add one year</button>
        <button @click="randomizeName">Set random name</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "index",
        computed: {
            ...mapGetters({
                user: 'user/user'
            })
        },
        methods: {
            ...mapMutations({
                setName: 'user/setName',
                setAge: 'user/setAge',
            }),
            incrementAge() {
                this.setAge(this.user.age + 1)
            },
            randomizeName() {
                const names = [
                    'John',
                    'Samantha',
                    'Vladimir',
                    'Joelle',
                    'Timofei'
                ].filter(name => name !== this.user.name);
                
                this.setName(names[
                    Math.floor(Math.random() * names.length)
                ])
            }
        }
    }
</script>
