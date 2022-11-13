7-1 ARCHITECTURE
All files from all of these subdirectories are then imported into the main.css input file, but notice there are no styles defined directly in the main.scss input file. In the 7-1 architecture all styles live in an appropriately-named partial, and are simply imported into the input file.

Variations

One more thing: despite being called "7-1", note that not all of the 7 directories are always required. For instance, some projects may not use third-party stylesheets. Or themes. In this case, we'd just omit those directories from the sass folder entirely. Simple as that!

Moving forward, we'd like you to try organizing your own Sass projects into multiple directories and files, similar to structures seen here. Depending on the size and scope of the project, you may not need all 7 directories. In fact, maybe you'll only need three or four. That's entirely alright; just experiment with the modular paradigm presented by 7-1 architecture.