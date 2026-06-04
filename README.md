# Past Papers Hub

A clean, fast past paper download site for my students. Built with vanilla HTML/CSS/JS, hosted on GitHub Pages.

## Adding New Papers

1. Copy PDF files into the correct folder under `papers/`
2. Edit `js/papers.js` — add an entry to the correct subject's `papers` array
3. Commit and push — site updates automatically

## Structure

```
papers/
  physics/0625/     — IGCSE Physics (0625)
  maths/0580/       — IGCSE Mathematics (0580)
  maths/9709/       — A Level Mathematics (9709)
  further-maths/9231/ — Further Mathematics (9231)
```

## Paper format

```js
{
  year: 'June 2023',
  paper: '4',
  variant: '1',
  type: 'QP', // QP | MS | GT | IN
  file: 'papers/physics/0625/filename.pdf'
}
```
