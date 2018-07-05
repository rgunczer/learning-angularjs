<template>
    <div>
        <p>modal goes here</p>
        <modal v-movable v-model="showModal2" title="Login" size="lg">
            <form class="form-horizontal" autocomplete="off">
                <div class="form-group">
                    <label for="username" class="col-sm-2 control-label">User Name:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="userName" id="username" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="pwd" class="col-sm-2 control-label">Password:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="password" id="pwd" class="form-control">
                    </div>
                </div>
            </form>
            <div slot="footer">
                <button type="submit" @click.prevent="onLogin" class="btn btn-primary">Login</button>
                <button type="button" @click="onCancel" class="btn btn-default">Cancel</button>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    props: ['credentials'],
    data () {
        return {
            userName: 'un',
            password: 'pwd',
            showModal2: true
        }
    },
    methods: {
        onLogin () {
            this.showModal2 = false
            console.log('username: ' + this.userName + ', pwd: ' + this.password);
            this.$emit('login', { userName: this.userName, pwd: this.password });
        },
        onCancel () {
            console.log('Test on Cancel...');
            this.showModal2 = false
        }
    }
}
</script>
