<?php
/**
 * templates.php
 */
?>
<script type="text/x-template" id="my-template">
    <div class="main-container">
        <div class="counter">
            <button @click="decrement">-</button>
            <span>{{ count }}</span>
            <button @click="increment">+</button>
        </div>
    </div>

</script>
