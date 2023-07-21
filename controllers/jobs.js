const getAllJobs = (req, res) => {
    res.send("get all jobs");
};

const getJob = (req, res) => {
    res.send("get single job");
};

const createJob = (req, res) => {
    res.send("create single job");
};

const updateJob = (req, res) => {
    res.send("update single job");
};

const deleteJob = (req, res) => {
    res.send("delete single job");
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
};
