<template>
    <div>
        <nav class="nav has-shadow">
            <div class="container">
                <a href="/">
                    <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
                </a>
            </div>
        </nav>
        <section class="main-section section">
            <div class="container content">
                <div class="columns">
                    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
                        <div class="card">
                            <div class="card-content">
                                <h3>{{post.title}}</h3>
                                    {{post.content}}
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item" :href="post.link" target="_blank">Read More</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    Follow us on s
                    <a href="#" target="_blank">Twitter</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                posts: [
                    { id: 1, title: 'PWA stats', content: 'blah blah' },
                    { id: 2, title: 'A Comprehensiv guide', content: 'blah blahasfdfas' },
                    { id: 3, title: 'So what', content: 'safdff fadfas ' },
                    { id: 4, title: 'State of', content: 'dfahjjfsvcsdf' },
                    { id: 5, title: 'Learning Javascript', content: 'ertruedf' },
                    { id: 6, title: 'The power of ', content: 'asdfshjdfd' }
                ]
            }
        }
    }
</script>
<style lang="scss">
    $primary: #287ab1;
    @import '~bulma';

    .columns {
        flex-wrap: wrap
    }
</style>