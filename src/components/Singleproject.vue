<template>
  <div class="project" :class="{complete : project.complete }">
      <div class="action">
        <h3 @click="toggleDetail">{{project.title}}</h3>
        <div class="icons">
            <router-link :to="{name: 'Editproject', params: {id: project.id}}">
                <span class="material-icons" title="Edit">edit</span>
            </router-link>
            <span class="material-icons" title="Delete" @click="deleteProject">delete</span>
            <span class="material-icons tick" title="Done" @click="completeProject">done</span>
        </div>
      </div>
      <div v-if="showDetail" class="details" ref="details">
        <p>{{project.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data(){
        return {
            showDetail : false,
            isProjectComplete : this.project.complete,
            url: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods : {
        toggleDetail(){
            this.showDetail = !this.showDetail
        },
        deleteProject(){
            // console.log(this.url)
            fetch(this.url, {method: 'DELETE'})
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err.message))
        },
        completeProject(){
            fetch(this.url, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ complete: !this.project.complete })
            }).then(() => {
                this.$emit('complete', this.project.id)
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>
.project{
    width: 500px;
    box-shadow: 1px 1px #ccc;
    padding: 15px;
    margin: 15px;
    cursor: pointer;
    transition-duration: 0.3s;
    background: whitesmoke;
    border-left: 4px solid #e90074;
    border-radius: 2px;
}
.project:hover {
    box-shadow: 4px 4px #ccc;
}
.action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover {
    color: #777;
}

.project.complete {
    border-left: 4px solid #00ce89;
}
.project.complete .tick {
    color: #00ce89;
  }
</style>