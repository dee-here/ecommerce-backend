const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        as: 'products'
      }
    });
    res.json(categories);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = req.params.id;
    const category = await Category.findOne({
      where: { id: categoryId},
      include: {
        model: Product,
        as: 'products'
      }
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const {category_name} = req.body;
    const newCategory = await Category.create({category_name});
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = req.params.id;
    const dataToUpdate = req.body;
    const updatedCategory = await Category.update(dataToUpdate, {
      where: {
        id: categoryId,
      },
    });
    res.json(updatedCategory);
  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const idToDelete = req.params.id;
    const deletedCategory = await Category.destroy({
      where: {
        id: idToDelete,
      }
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
    } else {
      res.status(200).json(deletedCategory);
    }

  } catch (error) {
    console.log(`Error is : ${error}`);
  }
});

module.exports = router;
