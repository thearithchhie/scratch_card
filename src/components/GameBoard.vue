<template>
  <!-- PERCENT LOADER START-->
  <div id="mainLoader">
    <img src="/assets/loader.png" /><br /><span>0</span>
  </div>
  <!-- PERCENT LOADER END-->

  <!-- CONTENT START-->
  <div id="mainHolder">
    <!-- BROWSER NOT SUPPORT START-->
    <div id="notSupportHolder">
      <div class="notSupport">
        YOUR BROWSER ISN'T SUPPORTED.<br />PLEASE UPDATE YOUR BROWSER IN ORDER
        TO RUN THE GAME
      </div>
    </div>
    <!-- BROWSER NOT SUPPORT END-->

    <!-- ROTATE INSTRUCTION START-->
    <div id="rotateHolder">
      <div class="mobileRotate">
        <div class="rotateDesc">
          <div class="rotateImg">
            <!-- <img src="assets/rotate.png" /> -->
          </div>
          Rotate your device <br />to landscape
        </div>
      </div>
    </div>
    <!-- ROTATE INSTRUCTION END-->

    <!-- CANVAS START-->
    <div id="canvasHolder">
      <canvas id="gameCanvas" width="1280" height="768"></canvas>
    </div>
    <!-- CANVAS END-->
  </div>
  <!-- CONTENT END-->
</template>

<script lang="ts" setup></script>

<style></style>
