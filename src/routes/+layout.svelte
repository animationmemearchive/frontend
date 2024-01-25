<script>
    import './app.css';

    import '@appwrite.io/pink';
    import '@appwrite.io/pink-icons';
</script>

<section class="alert is-action is-info">
    <div class="alert-grid">
        <span class="icon-currency-dollar" aria-hidden="true"></span>
        <div class="alert-content">
            <h6 class="alert-title">Video hosting isn't cheap!</h6>
            <p class="alert-message">Donate to allow the website features like more creators, faster load-times, and no crashes!</p>
        </div>
        <div class="alert-buttons u-flex u-gap-16 u-cross-child-center">
            <a href="https://donate.stripe.com/fZe29Je16cuc3sI4gh" target="_blank"
                ><button class="button is-secondary is-full-width-mobile">
                    <span class="text">Donate</span>
                </button></a>
        </div>
    </div>
</section>

<slot />
