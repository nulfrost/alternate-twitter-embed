document.addEventListener("copy", async (event) => {
  const shareLink = await navigator.clipboard.readText();
  // change vx to whatever mirror works
  // currently vx and fx still work
  const blob = new Blob(
    [shareLink.replace("https://x.com", "https://fxtwitter.com")],
    {
      type: "text/plain",
    }
  );
  const data = [new ClipboardItem({ ["text/plain"]: blob })];
  await navigator.clipboard.write(data);
  event.preventDefault();
});
