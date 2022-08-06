async function checkIfUrlIsFromUser(req, res, next) {
    const id = req.params.id;
    const { rows: urls } = await getUrlById(id);
    const user = urls[0].userId;
    const usserLogged = res.locals.user;
    if(user !== usserLogged.id) {
        res.sendStatus(401);
    }
    next();
}

export default checkIfUrlIsFromUser;