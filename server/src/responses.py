DELETE_JOB = {
    200: {
        "description": "Successful"
    },
    404: {
        "description": "No Job Found"
    }
}

UPLOAD_RESUME = {
    201: {
        "description": "Successfully uploaded resume"
    }, 
    415: {
        "description": "Unsupported Filetype"
    }
}

CREATE_JOB = {
    201: {
        "description": "Successful"
    },
    404: {
        "description": "Resume Not Found"
    }
}