<template>
    <h1>Edit Project</h1>
    <form @submit.prevent="handleSubmit">
        <label>Title: </label>
        <input type="text" v-model="title" required />
        <label>Details:</label>
        <textarea v-model="details" required />
        <button>Update Peoject</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            title: '',
            details: '',
            url: 'http://localhost:3000/projects/' + this.id 
        }
    },
    mounted(){
        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.title = data.title,
                this.details = data.details
            })
    },
    methods: {
        handleSubmit(){

            let updProject = {
                title: this.title,
                details: this.details,
                complete: false,
            }

            fetch(this.url, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updProject),
            })
                .then(() => {
                    this.$router.push("/");
                })
                .catch((err) => console.log(err));
            },
        },
    }

</script>