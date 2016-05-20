##
# Flytt itslearning innleveringer fra "elev/fil" til "elev fil".
# Bruk:
# Gå til katalogen med elevmappene "Etternavn_Fornavn (brukernavn)".
# Kjør denne filen python "c:\mappe\til\rename_innlevering.py"
##

from pathlib import Path
from os import path
from os import rename, rmdir
import re

p = Path(".")
# etternavn_fornavn mellomnavn (brukernavn)"
r = re.compile("(.+)_([^\(]+)")

files = p.glob("*/*")

for file in files:
    file = str(file)
    dir = path.dirname(file)
    match = r.match(dir)
    if not match:
        print("error: ", dir)
        continue
    name = match.groups()[1] + match.groups()[0]
    new_filename = " ".join([ name, path.basename(file) ])
    rename(file, new_filename)
    try:
        rmdir(dir)
    except OSError as e:
        pass
