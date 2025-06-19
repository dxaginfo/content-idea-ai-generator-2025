import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Idea {
  _id: string;
  title: string;
  description: string;
  contentType: 'blog' | 'video' | 'social';
  keywords: string[];
  industry: string;
  aiGenerated: boolean;
  favorite: boolean;
  scheduledDate?: string;
  createdAt: string;
}

interface IdeaState {
  ideas: Idea[];
  loading: boolean;
  error: string | null;
  currentIdea: Idea | null;
}

const initialState: IdeaState = {
  ideas: [],
  loading: false,
  error: null,
  currentIdea: null,
};

const ideaSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    getIdeasRequest: (state) => {
      state.loading = true;
    },
    getIdeasSuccess: (state, action: PayloadAction<Idea[]>) => {
      state.ideas = action.payload;
      state.loading = false;
    },
    getIdeasFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createIdeaRequest: (state) => {
      state.loading = true;
    },
    createIdeaSuccess: (state, action: PayloadAction<Idea>) => {
      state.ideas.unshift(action.payload);
      state.loading = false;
    },
    createIdeaFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentIdea: (state, action: PayloadAction<Idea>) => {
      state.currentIdea = action.payload;
    },
    clearCurrentIdea: (state) => {
      state.currentIdea = null;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const idea = state.ideas.find((idea) => idea._id === action.payload);
      if (idea) {
        idea.favorite = !idea.favorite;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  getIdeasRequest,
  getIdeasSuccess,
  getIdeasFailure,
  createIdeaRequest,
  createIdeaSuccess,
  createIdeaFailure,
  setCurrentIdea,
  clearCurrentIdea,
  toggleFavorite,
  clearError,
} = ideaSlice.actions;

export default ideaSlice.reducer;
