src/
  app/
    layout.tsx
    page.tsx                # Home
    tests/
      page.tsx              # All tests
      [slug]/
        page.tsx            # Test details
    take/
      [slug]/
        page.tsx            # Test questions
    results/
      [id]/
        page.tsx            # Results
    about/
      page.tsx
    contact/
      page.tsx
    api/
      tests/
        route.ts            # GET all tests
        [slug]/
          route.ts          # GET single test
      submissions/
        route.ts            # POST answers -> fake result
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    home/
      Hero.tsx
      Specialties.tsx
      RecommendedTests.tsx
      WhySection.tsx
      HomeContactStrip.tsx
    tests/
      TestCard.tsx
    ui/
      Button.tsx
  data/
    tests.ts                # mock tests + questions
  styles/
    globals.css


## notes
# run it locally - 
npm run dev