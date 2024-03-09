<script>
  import { Link } from "svelte-routing";
</script>

<main class="bg-gray-100 dark:bg-gray-700 pt-32 pb-20 overflow-auto flex">
  <div class="m-auto">
    <div class="mb-5">
      <Link
        to="/"
        class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
      >
        <p class="text-gray-700 font-bold font-mono">
          <i class="fas fa-arrow-left mr-3" />Go Back
        </p>
      </Link>
    </div>
    
    <!-- Display PDF -->
    <object data="../../pdf/resume.pdf" type="application/pdf" width="600" height="600">
    
      <p>Sorry, your browser doesn't support embedded PDFs.</p>
    </object>
  </div>
</main>


<style>
  /* only use light, regular, regular italic, bold */
  /* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"); */
  /* @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap'); */

  .resume {
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Noto Sans", sans-serif; */
    /* font-family: ui-sans-serif, sans-serif; */

    /* font-family: 'Lato', sans-serif; */
    /* font-family: 'Source Sans Pro', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */

    /* a4 size */
    width: 21cm;
    height: 29.7cm;

    box-sizing: border-box;
    /* padding: 2.25rem; */
    padding: 0.5in;
  }

  .content-text {
    /* @apply text-[11px] leading-snug; */
    font-size: 11px;
    line-height: 1.4;
  }

  .right-text {
    font-size: 11px;
    line-height: 1rem;
  }

  .title-text {
    font-size: 13px;
    line-height: 1.4;
  }

  @media print {
    .resume {
      height: 100% !important;
      width: 100% !important;
      position: fixed !important;
      z-index: 100000 !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 18px;
      -webkit-print-color-adjust: exact !important;
    }
    @page {
      size: A4;
      margin: 0.5in;
    }
  }
</style>
