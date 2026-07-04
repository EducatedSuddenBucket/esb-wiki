<template>
  <footer class="esb-footer">
    <p class="message">
      Released under the
      <a
        href="https://github.com/EducatedSuddenBucket/esb-wiki/blob/main/LICENSE"
        target="_blank"
        rel="noreferrer"
      >MIT License</a>.
    </p>
    <p class="copyright">Copyright © 2026 EducatedSuddenBucket</p>
  </footer>
</template>

<style scoped>
.esb-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 24px 24px 32px;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.esb-footer a {
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.esb-footer .copyright {
  margin-top: 4px;
}
</style>
