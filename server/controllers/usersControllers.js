import { addLauncherService } from "../services/launchersServices.js";

export async function addUserController(req, res) {
  try {
    const { username, password, email, user_type, last_login } = req.body;
    const newUser = await addLauncherService({
      username,
      password,
      email,
      user_type,
      last_login,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
}
