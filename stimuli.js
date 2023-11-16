var stimuli =[
    {"stimulus":"../utils/cercle.png", "label":"Vous", "data": {"screen": "trial", "shape": "cercle", "label_cond": "Vous"}},
    {"stimulus":"../utils/cercle.png", "label":"Friend", "data": {"screen": "trial", "shape": "cercle", "label_cond": "Friend"}},
    {"stimulus":"../utils/cercle.png", "label":"Stranger", "data": {"screen": "trial", "shape": "cercle", "label_cond": "Stranger"}},
    {"stimulus":"../utils/triangle.png", "label":"Vous", "data": {"screen": "trial", "shape": "triangle", "label_cond": "Vous"}},
    {"stimulus":"../utils/triangle.png", "label":"Friend", "data": {"screen": "trial",  "shape": "triangle", "label_cond": "Friend"}},
    {"stimulus":"../utils/triangle.png", "label":"Stranger", "data": {"screen": "trial", "shape": "triangle", "label_cond": "Stranger"}},
    {"stimulus":"../utils/carré.png", "label":"Vous", "data": {"screen": "trial", "shape": "carré", "label_cond": "Vous"}},
    {"stimulus":"../utils/carré.png", "label":"Friend", "data": {"screen": "trial", "shape": "carré", "label_cond": "Friend"}},
    {"stimulus":"../utils/carré.png", "label":"Stranger", "data": {"screen": "trial", "shape": "carré", "label_cond": "Stranger"}},
]

var stimuli_training = [
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond":"YFS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "YFS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "YFS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "YFS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "YFS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "YFS"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YFS"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YFS"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Friend", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YFS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "YSF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "YSF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "YSF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "YSF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "YSF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "YSF"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YSF"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YSF"}},
    {"stimulus":"../utils/carré.png", "label1":"Vous", "label2":"Stranger", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "YSF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SFY"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SFY"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SFY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "SFY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "SFY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "SFY"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SFY"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SFY"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Friend", "label3":"Vous","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SFY"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SYF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SYF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "SYF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "SYF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "SYF"}},
    {"stimulus":"../utils/triangle.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "SYF"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SYF"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SYF"}},
    {"stimulus":"../utils/carré.png", "label1":"Stranger", "label2":"Vous", "label3":"Friend","data": {"screen": "practice_trial", "shape": "carré", "label_cond": "SYF"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond":"FYS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "FYS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "FYS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "FYS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "FYS"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "FYS"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger", "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FYS"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FYS"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Vous", "label3":"Stranger",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FYS"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond":"FSY"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "FSY"}},
    {"stimulus":"../utils/cercle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "cercle", "label_cond": "FSY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous",  "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "FSY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial",  "shape": "triangle", "label_cond": "FSY"}},
    {"stimulus":"../utils/triangle.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "triangle", "label_cond": "FSY"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous", "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FSY"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FSY"}},
    {"stimulus":"../utils/carré.png", "label1":"Friend", "label2":"Stranger", "label3":"Vous",  "data": {"screen": "practice_trial", "shape": "carré", "label_cond": "FSY"}},
]