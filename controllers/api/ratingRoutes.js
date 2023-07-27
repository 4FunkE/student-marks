const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRating = await Rating.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRating);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ratingData = await Rating.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ratingData) {
      res.status(404).json({ message: 'No rating found with this id!' });
      return;
    }

    res.status(200).json(ratingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
