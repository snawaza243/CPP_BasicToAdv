import datetime
basename = "mylogfile"
suffix = datetime.datetime.now().strftime("%y%m%d_%H%M%S")
filename = "_".join([basename, suffix]) # e.g. 'mylogfile_120508_171442'




import uuid
filename = str(uuid.uuid4())