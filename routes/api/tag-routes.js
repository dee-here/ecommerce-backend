const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product,
        as: 'products'
      }
    });
    res.json(tags);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = req.params.id;
    const tag = await Tag.findOne({
      where: { id: tagId},
      include: {
        model: Product,
        as: 'products'
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      res.json(tag);
    }
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const {tag_name} = req.body;
    const newTag = await Tag.create({tag_name});
    res.status(200).json(newTag);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagId = req.params.id;
    const dataToUpdate = req.body;
    const updatedTag = await Tag.update(dataToUpdate, {
      where: {
        id: tagId,
      },
    });
    res.json(updatedTag);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const idToDelete = req.params.id;
    const deletedTag = await Tag.destroy({
      where: {
        id: idToDelete,
      }
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'No Tag found with this id!' });
    } else {
      res.status(200).json(deletedTag);
    }

  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

module.exports = router;

