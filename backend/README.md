#### Commands for creating conda virtual environment
conda create -n venv python=3.9 -y [new directory] 
conda create -p venv python=3.9 -y [present directory] 

#### activate the environment
conda activate venv/ 

#### added dependecies
flask 
pandas 
numpy 
seaborn 

#### install python dependencies from requirment.txt
pip install -r requirements.txt 

#### install and activate ipykernel inside python project
pip install ipykernel