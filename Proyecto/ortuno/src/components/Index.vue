<script>
export default {
    computed: {
      username() {
        // We will see what `params` is shortly
        return this.$route.params.username
      },
    },
    methods: {
      goToDashboard() {
        if (isAuthenticated) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/login')
        }
      },
    },
  }
</script>