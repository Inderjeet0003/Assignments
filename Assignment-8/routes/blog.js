const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');



// Display all the blogs
router.get('/blogs', async(req, res) => {

    try {
        const blogs = await Blog.find({});
        res.render('blogs/index', { blogs });
    } catch (e) {
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find Blogs');
        res.render('error');
    }
})


// Get the form for new blogs
router.get('/blogs/new', (req, res) => {

    res.render('blogs/new');
})


// Create New blog
router.post('/blogs', async(req, res) => {

    try {
        await Blog.create(req.body.blog);
        req.flash('success', 'Blog Created Successfully');
        res.redirect('/blogs');
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Create Blog,Something is Wrong');
        res.render('error');
    }
});


// Show particular blog
router.get('/blogs/:id', async(req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('reviews');
        res.render('blogs/show', { blog });
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot find this blog');
        res.redirect('/error');
    }
})

// Get the edit form
router.get('/blogs/:id/edit', async(req, res) => {

    try {
        const blog = await Blog.findById(req.params.id);
        res.render('blogs/edit', { blog });
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Edit this Blog');
        res.redirect('/error');
    }
})

// Upadate the particular Blog
router.patch('/blogs/:id', async(req, res) => {

    try {
        console.log(req.body.blog)
        await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
        req.flash('success', 'Updated Successfully!');
        res.redirect(`/blogs/${req.params.id}`)
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot update this Blog');
        res.redirect('/error');
    }
})


// Delete a particular Blog
router.delete('/blogs/:id', async(req, res) => {

    try {
        await Blog.findByIdAndDelete(req.params.id);
        req.flash('success', 'Deleted the blog successfully');
        res.redirect('/blogs');
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot delete this Blog');
        res.redirect('/error');
    }
})




// Creating a New Comment on a blog

router.post('/blogs/:id/review', async(req, res) => {

    try {

        const blog = await Blog.findById(req.params.id);
        const review = new Review(req.body);
        // console.log(review)
        blog.reviews.push(review);

        await review.save();
        await blog.save();

        req.flash('success', 'Successfully added your review!')
        res.redirect(`/blogs/${req.params.id}`);
    } catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot add review to this blog');
        res.redirect('/error');
    }

})


router.get('/error', (req, res) => {
    res.status(404).render('error');
})


module.exports = router;